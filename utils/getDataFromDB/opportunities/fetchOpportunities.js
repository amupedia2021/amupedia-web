import db from 'db/db';
import Opportunities from 'db/models/Opportunities';

export default async function fetchOpportunities() {
  await db.connect();
  const data = await Opportunities.find();
  await db.disconnect();

  return JSON.parse(JSON.stringify(data));
}
