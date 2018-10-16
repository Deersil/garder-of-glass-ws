export const crudMixin = (model: any) => ({
  fetchOne: (opt: any) =>
    model
      .query()
      .where(opt)
      .first(),
  fetchById: (id: any) =>
    model
      .query()
      .where('id', id)
      .first(),
  fetchAll: (query = {}) => 
    model
    .query()
    .where(query),
  deleteById: (id: any) =>
    model
      .query()
      .deleteById(id),
  update: (id: any, updatePayload: any) => 
    model
      .query()
      .updateAndFetchById(id, updatePayload),
  create: (payload: any) =>
    model
      .query()
      .returning('*')
      .insert(payload),
});
