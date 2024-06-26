import { PropsWithChildren, ReactNode } from 'react';

type Props = PropsWithChildren<
	Partial<{
		header: ReactNode;
		footer: ReactNode;
	}>
>;

export const TemplateScaffold = ({ children, header, footer }: Props) => {
	return (
		<div className="relative flex min-h-screen min-w-[320px] flex-col justify-between">
			{header && <header>{header}</header>}

			<main className="flex-1">{children}</main>

			{footer && <footer>{footer}</footer>}
		</div>
	);
};
