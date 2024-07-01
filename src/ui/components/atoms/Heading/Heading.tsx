import { PropsWithChildren } from 'react';

export const Heading = ({ children }: PropsWithChildren) => {
	return <p className="font-oswald text-2xl font-bold">{children}</p>;
};
