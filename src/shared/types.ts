import r from 'rype';

const querySchema = r.object({
  position: r.optional
    .string('connected', 'pending', 'offline')
    .default({ $regex: '.' } as unknown as 'connected'),
  status: r.optional
    .string('online', 'hybrid', 'in-person')
    .default({ $regex: '.' } as unknown as 'online'),
  email: r.optional.string().default('.'),
  searchTerm: r.optional.string().default('.'),
});

export default querySchema;
