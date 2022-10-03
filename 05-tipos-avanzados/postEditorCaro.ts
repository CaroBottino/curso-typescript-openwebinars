type Person = {
    name: string,
    lastName: string,
    role: [
        role: number,
        roleName: string
    ]
}

const admin2: Person = {
    name: 'Jhon',
    lastName: 'Smith',
    role: [1, 'Admin'],
};

const developer2: Person = {
    name: 'Jose',
    lastName: 'Cabrera',
    role: [2, 'Developer'],
};

const editor2: Person = {
    name: 'Will',
    lastName: 'Doe',
    role: [3, 'Editor'],
};

type BlogPost = {
    id: number,
    title: string,
    createdAt: number,
    author: Person
}

const post1: BlogPost = {
    id: 1,
    title: 'Aprender TypeScript',
    createdAt: Date.now(), //'03/03/2020',
    author: developer2,
}

const post2: BlogPost = {
    id: 2,
    title: 'Aprender JavaScript',
    createdAt: Date.now(), //'18/03/2020',
    author: editor2,
}

const post3: BlogPost = {
    id: 3,
    title: 'Es realmente TypeScript útil?',
    createdAt: Date.now(), //'18/05/2020',
    author: admin2,
}

const POSTS2: BlogPost[] = [
    post1,
    post2,
    post3,
]

//otra forma...
const POSTS3: BlogPost[] = [
    {
        id: 1,
        title: 'Aprender TypeScript',
        createdAt: Date.now(), //'03/03/2020',
        author: developer2,
    },
    {
        id: 2,
        title: 'Aprender JavaScript',
        createdAt: Date.now(), //'18/03/2020',
        author: editor2,
    },
    {
        id: 3,
        title: 'Es realmente TypeScript útil?',
        createdAt: Date.now(), //'18/05/2020',
        author: admin2,
    }
]

type EditedPost = {
    oldPost: BlogPost,
    newPost: BlogPost,
    edittedBy: Person,
    edittedAt: number,
}

type PostLog = {
    id?: number,
    editedPost?: EditedPost,
}

const postLog2: PostLog = {}

//otra forma...
const postLog3: Record<number, EditedPost> = {}

function isAdmin2(person: Person) {
    const [role, roleName] = person.role;
  
    return role === 1 && roleName === 'Admin';
}

function notHasPermissionLog2(person: Person, post: BlogPost) {
    console.log(`User ${person.name} with the role ${person.role[1]} has no permission to edit the post ${post.title}`);
}

// otra forma..
function notHasPermissionLog3({ name, role }: Person, { title }: BlogPost) {
    console.log(`User ${name} with the role ${role[1]} has no permission to edit the post ${title}`);
}

for (let index = 0; index < POSTS2.length; index++) {
    const post = POSTS2[index];
  
    if (isAdmin2(post.author)) {
      if (!(post.id in postLog2)) {
        postLog2[post.id] = {};
        postLog2[post.id].oldPost = post;
        postLog2[post.id].edittedBy = admin2;
        postLog2[post.id].edittedAt = Date.now();
        
        const copyPost = JSON.parse(JSON.stringify(post));
        copyPost.title = '¿Es realmente TypeScript útil?';
        copyPost.author = admin2;
        
        postLog2[post.id].newPost = copyPost;

        //otra forma...
        const editedPost2: EditedPost = {
            oldPost: post,
            edittedBy: admin2,
            edittedAt: Date.now(),
            newPost: copyPost,
        };

        postLog3[post.id] = editedPost2;
      }
    } else {
      notHasPermissionLog2(post.author, post);
    }
}
  
console.log(postLog2);
console.log(postLog3);