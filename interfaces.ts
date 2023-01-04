interface User {
  name: string;
  id: number;
}

// const user: User = {
//   name: 'Michael',
//   id: 10,
// };

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

	function deleteUser(user: User) {
		// ...
	}
	 
	function getAdminUser(): User {
		// ...
	}
}

const user: User = new UserAccount('Michael', 10);
