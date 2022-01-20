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
`;

export const Content = styled.div`
	width: 100%;
	max-width: 600px;
	padding: 2rem 1.5rem;

	background-color: ${({ theme }) => theme.background_light};

	display: flex;
	flex-direction: column;
	border-radius: 0.5rem;

	h1 {
		font-size: 2rem;
		margin-bottom: 2rem;
	}
`;

export const ButtonContainer = styled.div`
	width: 100%;
	height: 3rem;
	margin-top: 2rem;

	display: flex;
	justify-content: center;

	button {
		margin: 0 0.5rem;
	}
`;
