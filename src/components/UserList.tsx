import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypeSelector";
import {fetchUsers} from "../store/action-creators/user";
import {Dispatch} from "redux";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
	const {users, error, loading} = useTypedSelector(state => state.user)
	const {fetchUsers} = useActions()

	useEffect(() => {
		return () => {
			fetchUsers()
		};
	}, []);

	if (loading){
		return <h1>Идет загрузка...</h1>
	}
	if (error) {
		return <h1>Ошибка!</h1>
	}

	return (
			<div>
				{users.map(user =>
				<div key={user.id}>{user.name}</div>
				)}
			</div>
	);
};

export default UserList;
