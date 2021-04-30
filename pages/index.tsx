import { GetStaticProps } from 'next';
import { getInfo } from '../lib/contentful';
import { JumbotronInfoType } from '../types';

interface TitleProps {
	title: string;
}
interface BodyProps {
	text: string;
}
const HeaderTitle = ({ title }: TitleProps) => (
	<p className="text-5xl font-black">{title}</p>
);
const BodyText = ({ text }: BodyProps) => (
	<p className="text-md mt-6 text-[#525456]">{text}</p>
);

interface Props {
	jumbotronInfo: JumbotronInfoType;
}

export default function Home({ jumbotronInfo }: Props): JSX.Element {
	return (
		<div className="h-screen w-screen bg-white my-64 mx-24">
			<HeaderTitle title={jumbotronInfo.title} />
			<BodyText text={jumbotronInfo.subtitle} />
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const jumbotronInfo = await getInfo();
	return { props: { jumbotronInfo } };
};
