import { NextFunction } from "express";
import { FastifyInstance, RouteShorthandOptions } from "fastify";

export const userRoutes = async (
  server: FastifyInstance,
  options: RouteShorthandOptions,
  next: NextFunction
) => {
  server.get("/hello", (req, res) => {
    console.log("hello from fastify");
    res.send("hello world");
  });
};

export const booksRoutes = async (server: FastifyInstance,
    options: RouteShorthandOptions,
    next: NextFunction) => {
        server.get('/', (req, res) => {
            console.log('should return books')
        })

        server.post('/', (req, res) => {
    
        })
};
