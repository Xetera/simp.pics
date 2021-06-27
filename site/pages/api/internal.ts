import { ApolloServer } from "apollo-server-micro"
import makeCors from "micro-cors"
import { privateSchema } from "@/lib/schema"
import { contextResolver } from "@/lib/context"

export const config = {
  api: {
    bodyParser: false,
  },
}

const cors = makeCors()

const apolloServer = new ApolloServer({
  introspection: process.env.NODE_ENV === "development",
  schema: privateSchema,
  context: contextResolver,
})

const handler = apolloServer.createHandler({ path: "/api/internal" })

export default cors((req, res) => {
  return req.method === "OPTIONS" ? res.end() : handler(req, res)
})
