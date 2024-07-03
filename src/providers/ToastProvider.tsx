'use client';

import {
	Toast,
	ToastClose,
	ToastDescription,
	ToastProvider as Provider,
	ToastTitle,
	ToastViewport,
	useToast,
} from '@/components/molecules/Toast';

export function ToastProvider() {
	const { toasts } = useToast();

	return (
		<Provider>
			{toasts.map(({ id, title, description, action, ...props }) => (
				<Toast key={id} {...props}>
					<div className="grid gap-1">
						{title && <ToastTitle>{title}</ToastTitle>}
						{description && <ToastDescription>{description}</ToastDescription>}
					</div>
					{action}
					<ToastClose />
				</Toast>
			))}
			<ToastViewport />
		</Provider>
	);
}
