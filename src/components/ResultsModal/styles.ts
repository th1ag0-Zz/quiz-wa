import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90%;
	max-width: 600px;
	height: 80%;
	max-height: 600px;

	background-color: ${({ theme }) => theme.background_light};
	color: ${({ theme }) => theme.title};
	border-radius: 0.5rem;
	padding: 2rem;

	overflow-y: scroll;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const ResultContent = styled.div`
	width: 100%;

	p {
		font-size: 1.1rem;
		margin-bottom: 0.8rem;
	}

	& + div {
		margin-top: 2rem;
	}
`;

export const CorrectResult = styled.div`
	width: 100%;
	padding: 1rem 1.5rem;
	background-color: ${({ theme }) => theme.tertiary};
	font-size: 1rem;
	font-weight: bold;
`;

export const IncorrectResult = styled.div`
	width: 100%;
	padding: 1rem 1.5rem;
	background-color: ${({ theme }) => theme.attention};
	margin-bottom: 0.4rem;
	font-size: 1rem;
	font-weight: bold;
`;
