$(function($) {

				$('#comments-container').comments({
				    enableAttachments: true,
					profilePictureURL: 'http://colab.gecdn.com/profile_images/54/210071367.jpg',
					roundProfilePictures: true,
					textareaRows: 1,
					getComments: function(success, error) {
						setTimeout(function() {
							success(commentsArray);
						}, 500);
					},
					postComment: function(data, success, error) {
						setTimeout(function() {
							success(data);
						}, 500);
					},
					putComment: function(data, success, error) {
						setTimeout(function() {
							success(data);
						}, 500);
					},
					deleteComment: function(data, success, error) {
						setTimeout(function() {
							success();
						}, 500);
					},
					upvoteComment: function(data, success, error) {
						setTimeout(function() {
							success(data);
						}, 500);
					},
					uploadAttachments: function(dataArray, success, error) {
						setTimeout(function() {
							success(dataArray);
						}, 500);
					},
				});



/*
$('#comments-container').comments({
    getComments: function(success, error) {
        var commentsArray = [{
            id: 1,
            created: '2015-10-01',
            content: 'Lorem ipsum dolort sit amet',
            fullname: 'Simon Powell',
            upvote_count: 2,
            user_has_upvoted: false
        }];
        success(commentsArray);
    }
});
*/

});