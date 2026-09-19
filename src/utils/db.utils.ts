import { Pool } from 'pg';
export const pool = new Pool({
user: 'postgres',
host: 'localhost',
database: 'db1',
password: '21012002',
port: 5432,
});
export async function closeDbConnection(): Promise<void> {
await pool.end();
}