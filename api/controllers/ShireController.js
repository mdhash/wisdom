module.exports = {
    wisdom: async function(req, res) {
        var eureka = await sails.helpers.tolkien()
        return res.json(eureka);
    }
};