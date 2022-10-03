var admin2 = {
    name: 'Jhon',
    lastName: 'Smith',
    role: [1, 'Admin']
};
var developer2 = {
    name: 'Jose',
    lastName: 'Cabrera',
    role: [2, 'Developer']
};
var editor2 = {
    name: 'Will',
    lastName: 'Doe',
    role: [3, 'Editor']
};
var post1 = {
    id: 1,
    title: 'Aprender TypeScript',
    createdAt: Date.now(),
    author: developer2
};
var post2 = {
    id: 2,
    title: 'Aprender JavaScript',
    createdAt: Date.now(),
    author: editor2
};
var post3 = {
    id: 3,
    title: 'Es realmente TypeScript útil?',
    createdAt: Date.now(),
    author: admin2
};
var POSTS2 = [
    post1,
    post2,
    post3,
];
//otra forma...
var POSTS3 = [
    {
        id: 1,
        title: 'Aprender TypeScript',
        createdAt: Date.now(),
        author: developer2
    },
    {
        id: 2,
        title: 'Aprender JavaScript',
        createdAt: Date.now(),
        author: editor2
    },
    {
        id: 3,
        title: 'Es realmente TypeScript útil?',
        createdAt: Date.now(),
        author: admin2
    }
];
var postLog2 = {};
//otra forma...
var postLog3 = {};
function isAdmin2(person) {
    var _a = person.role, role = _a[0], roleName = _a[1];
    return role === 1 && roleName === 'Admin';
}
function notHasPermissionLog2(person, post) {
    console.log("User ".concat(person.name, " with the role ").concat(person.role[1], " has no permission to edit the post ").concat(post.title));
}
// otra forma..
function notHasPermissionLog3(_a, _b) {
    var name = _a.name, role = _a.role;
    var title = _b.title;
    console.log("User ".concat(name, " with the role ").concat(role[1], " has no permission to edit the post ").concat(title));
}
for (var index = 0; index < POSTS2.length; index++) {
    var post = POSTS2[index];
    if (isAdmin2(post.author)) {
        if (!(post.id in postLog2)) {
            postLog2[post.id] = {};
            postLog2[post.id].oldPost = post;
            postLog2[post.id].edittedBy = admin2;
            postLog2[post.id].edittedAt = Date.now();
            var copyPost = JSON.parse(JSON.stringify(post));
            copyPost.title = '¿Es realmente TypeScript útil?';
            copyPost.author = admin2;
            postLog2[post.id].newPost = copyPost;
            //otra forma...
            var editedPost2 = {
                oldPost: post,
                edittedBy: admin2,
                edittedAt: Date.now(),
                newPost: copyPost
            };
            postLog3[post.id] = editedPost2;
        }
    }
    else {
        notHasPermissionLog2(post.author, post);
    }
}
console.log(postLog2);
console.log(postLog3);
