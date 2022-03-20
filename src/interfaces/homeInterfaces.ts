export interface Result {
    data:       Data;
    status:     number;
    statusText: string;
    headers:    ResultHeaders;
    config:     Config;
    request:    Request;
}

export interface Config {
    transitional:      Transitional;
    transformRequest:  null[];
    transformResponse: null[];
    timeout:           number;
    xsrfCookieName:    string;
    xsrfHeaderName:    string;
    maxContentLength:  number;
    maxBodyLength:     number;
    headers:           ConfigHeaders;
    method:            string;
    url:               string;
}

export interface ConfigHeaders {
    Accept: string;
}

export interface Transitional {
    silentJSONParsing:   boolean;
    forcedJSONParsing:   boolean;
    clarifyTimeoutError: boolean;
}

export interface Data {
    count:    number;
    next:     string;
    previous: null;
    results:  ResultElement[];
}

export interface ResultElement {
    name:       string;
    height:     string;
    mass:       string;
    hair_color: string;
    skin_color: string;
    eye_color:  string;
    birth_year: string;
    gender:     Gender;
    homeworld:  string;
    films:      string[];
    species:    string[];
    vehicles:   string[];
    starships:  string[];
    created:    Date;
    edited:     Date;
    url:        string;
}

export enum Gender {
    Female = "female",
    Male = "male",
    NA = "n/a",
}

export interface ResultHeaders {
    "content-type": string;
}


export interface Characters {
    name: string,
    url: string,
    height: string,
    mass: string,
    hair_color: string,
    eye_color: string,
    birth_year: string,
    gender: string
}