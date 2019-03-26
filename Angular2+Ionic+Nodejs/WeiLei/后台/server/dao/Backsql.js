exports.sql={
    getAllComments:'select c.id,c.content,u1.name commenter,u2.name master from  comment c join userinfo u1 on u1.id=c.commenter_id join userinfo u2 on u2.id=c.master_id',
    delComment:'delete from comment where id=?',
    getAllRecipes:'select r.id,r.name,u.name creater from recipes r join userinfo u on u.id = r.creater_id',
    delRecipe:'call del_recipe(?)',
    getPasswordbyName:'select * from admin where name=?'
}