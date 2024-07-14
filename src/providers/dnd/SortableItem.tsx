'use client';

import { PropsWithChildren, ReactNode } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Slot } from '@radix-ui/react-slot';
import { UniqueIdentifier } from '@dnd-kit/core';

type Props = PropsWithChildren<{
	id: UniqueIdentifier;
	dndElement: ReactNode;
}>;

export function SortableItem({ id, dndElement, children }: Props) {
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
		id,
	});

	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
	};

	return (
		<div className="relative" style={style}>
			{children}

			<Slot ref={setNodeRef} className="absolute left-2 top-2" {...attributes} {...listeners}>
				{dndElement}
			</Slot>
		</div>
	);
}
