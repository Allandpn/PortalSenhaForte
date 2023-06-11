



// retorna nome do usuario logado
const userName = () => {
    const user = JSON.parse(localStorage.getItem("db_user"))
	let name
	if(!user) {
		name = "Anônimo"
	} else {
		name = user[0].usuario
	}	
	
	return name
}


console.log(userName())


const users = [
	{
		name: 'Jayski Oje',
		home_address:
			'A prática cotidiana prova que o fenômeno da Internet promove a alavancagem dos níveis de motivação departamental.',
		email: 'user@example.com',
		avatar: 'Arquivos/imagens/profile1.jpg',
		liked: false,
		disliked: false,
	},
	{
		name: 'Bing BoyTheo',
		home_address:
			'Do mesmo modo, o desafiador cenário globalizado exige a precisão e a definição da gestão inovadora da qual fazemos parte. ',
		email: 'user@example.com',
		avatar: 'Arquivos/imagens/profile2.jpg',
		liked: false,
		disliked: false,
	},
];

let usersContainer = document.getElementById('comments');
let textarea = document.getElementById('story');
let commentBtn = document.getElementById('story-button');

if (!localStorage.getItem('users')) {
	localStorage.setItem('users', JSON.stringify(users));
}

let text;

textarea.addEventListener('input', e => {
	text = e.target.value;
});

commentBtn.addEventListener('click', () => {
	const parsedComents = JSON.parse(localStorage.getItem('users'));

	const username = userName()

	parsedComents.push({
		name: username,
		home_address: text,
		email: 'jenmny@exp',
		avatar: 'Arquivos/imagens/profile1.jpg',
		liked: false,
		disliked: false,
	});

	localStorage.setItem('users', JSON.stringify(parsedComents));

	window.location.reload();
});

const comments = JSON.parse(localStorage.getItem('users'));

const mappedUsers = comments.map((user, index) => {
	let likeNumber = user.liked ? index + 1 : index;

	likeNumber = user.disliked ? index : likeNumber;

	const classLiked = user.liked ? 'liked' : '';

	const classDisliked = user.disliked ? 'disliked' : '';

	return `<div class="project-card" key=${index} id=${index}>
                <div class= "left-wrapper"><img src=${user.avatar} alt="user profile image" class="user-avatar" /></div>
                <div class="right-wrapper">
                	<div class="details">
	                 <p class="name-comment">${user.name}</p>
					 <hr>
	                 <p class="content-comment">${user.home_address}</p>
	               </div>
								 <div class="icon-comment-main">
								 	<div class="like-button icon-comment ${classLiked}" id="likeButton">
									 <i class="fa fa-thumbs-up"></i>
									 </div>
									 <span class="like-number icon-comment" >${likeNumber}</span>
									 <div class="dislike-button icon-comment  ${classDisliked}" id=dislikeButton">
									 <i class="fa fa-thumbs-down "></i>
														</div>
								 </div>
                </div>
          </div>`;
});

usersContainer.innerHTML = mappedUsers;

const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach((likeButton, index) => {
	likeButton.addEventListener('click', () => {
		const parsedComents = JSON.parse(localStorage.getItem('users'));

		const updatedComments = parsedComents.map((comment, i) => {
			if (i === index) {
				comment.liked = !comment.liked;
			}

			return comment;
		});

		localStorage.setItem('users', JSON.stringify(updatedComments));

		window.location.reload();
	});
});

const dislikeButtons = document.querySelectorAll('.dislike-button');

dislikeButtons.forEach((dislikeButton, index) => {
	dislikeButton.addEventListener('click', () => {
		const parsedComents = JSON.parse(localStorage.getItem('users'));

		if (parsedComents[index].liked) {
			return;
		}

		const updatedComments = parsedComents.map((comment, i) => {
			if (i === index) {
				comment.disliked = !comment.disliked;
			}

			return comment;
		});

		localStorage.setItem('users', JSON.stringify(updatedComments));

		window.location.reload();
	});
});
