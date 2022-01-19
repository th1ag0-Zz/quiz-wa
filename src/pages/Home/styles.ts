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
	align-items: center;
	border-radius: 0.5rem;

	h1 {
		font-size: 2.4rem;
		margin-bottom: 2rem;
	}

	p {
		font-size: 1.2rem;
		text-align: center;

		& + p {
			font-size: 1rem;
			margin-top: 0.4rem;
			margin-bottom: 2rem;
		}
	}
`;

export const ButtonContainer = styled.div`
	margin-top: 2rem;
`;
