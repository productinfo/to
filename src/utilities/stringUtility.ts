import * as vscode from 'vscode';
import * as _ from 'lodash';
import { Utility } from './utility';


export class StringUtils extends Utility {

    constructor() {
        super("string");
    }

    public camelCase(input: string): string {
        return _.camelCase(input);
    }

    public deburr(input: string): string {
        return _.deburr(input);
    }

    public kebabCase(input: string): string {
        return _.kebabCase(input);
    }

    public lowerCase(input: string): string {
        return input.toLowerCase();
    }

    public reverse(input: string): string {
        return input.split('').reverse().join('');
    }

    public snakeCase(input: string): string {
        return _.snakeCase(input);
    }

    public trim(input: string): string {
        return input.trim();
    }

    public upperCase(input: string): string {
        return input.toUpperCase();
    }
}

