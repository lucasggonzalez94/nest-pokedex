import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';
import { Model } from 'mongoose';

import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({});

    const { data } = await this.axios.get<PokeResponse>(
      'http://pokeapi.co/api/v2/pokemon?limit=650',
    );

    // const insertPromisesArray = []; //Insercion con promesas
    const pokemonToInsert: { name: string; no: number }[] = []; //Insercion con una sola peticion a la bd

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];

      // await this.pokemonModel.create({ name, no }); //Insercion normal
      // insertPromisesArray.push(this.pokemonModel.create({ name, no })); //Insercion con promesas
      pokemonToInsert.push({ name, no }); //Insercion con una sola peticion a la bd
    });

    // await Promise.all(insertPromisesArray); //Insercion con promesas
    await this.pokemonModel.insertMany(pokemonToInsert); //Insercion con una sola peticion a la bd

    return 'Seed executed';
  }
}
