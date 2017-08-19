/*
 * GET home page.
 */

exports.index = function(req, res) {
    res.render('index', { title: 'Assignment 3 - AppV1.0' });
};