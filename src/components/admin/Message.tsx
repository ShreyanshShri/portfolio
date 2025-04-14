type message = {
	name: string;
	email: string;
	message: string;
};

const Message = ({ message }: { message: message }) => {
	return (
		<div
			id="Message"
			className="mx-8 my-4 px-4 py-4 border border-white-50/25 rounded-lg"
		>
			<h3 className="text-xl">{message.name}</h3>
			<span className="opacity-75">{message.email}</span>
			<p>{message.message}</p>
		</div>
	);
};

export default Message;
