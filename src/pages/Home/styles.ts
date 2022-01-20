import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	padding: 0 2rem;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.title};

	position: relative;

	> button {
		position: absolute;
		bottom: 2rem;
		right: 1.5rem;

		svg {
			margin-right: 0.6rem;
		}
	}
`;

export const Content = styled.div`
	width: 100%;
	max-width: 600px;
	height: 70%;
	max-height: 480px;
	padding: 2rem 1.5rem;

	background-color: ${({ theme }) => theme.background_light};

	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 0.5rem;
	position: relative;

	h1 {
		font-size: 2.4rem;
		margin-bottom: 2rem;
	}

	> p {
		font-size: 1.2rem;
		text-align: center;

		& + p {
			font-size: 1rem;
			margin-top: 0.4rem;
			margin-bottom: 2rem;
		}
	}

	.backIcon {
		position: absolute;
		top: 1.5rem;
		left: 1.5rem;
	}
`;

export const ButtonContainer = styled.div`
	margin-top: 2rem;
	height: 3rem;

	display: flex;
	align-items: center;
`;

export const HeaderListContent = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 3.2rem;
	margin-bottom: 1.2rem;

	p {
		margin: 0;
		font-size: 1.2rem;

		& + p {
			font-size: 1.2rem;
			margin: 0;
		}
	}
`;

export const PlayersListContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex: 1;
	padding-bottom: 0.2rem;

	overflow-y: scroll;

	&::-webkit-scrollbar {
		display: none;
	}

	button {
		width: 100%;
		display: flex;
		justify-content: space-between;

		& + button {
			margin-top: 0.8rem;
		}
	}
`;
