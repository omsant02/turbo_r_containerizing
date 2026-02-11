import { prismaClient } from "db/client";

interface user {
    username: string,
    password: string
  }

export default async function Home() {
  const users: user[] = await prismaClient.user.findMany()

  
  
  return <div>
    {users.map((user, index:number) => <div key={index}>{user.username}</div>)}
    <div>or</div>
    <div>{JSON.stringify(users)}</div>
  </div>
}