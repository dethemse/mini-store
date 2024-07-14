'use client';

import { PropsWithChildren } from 'react';
import { DndContext, DragEndEvent, UniqueIdentifier, closestCenter } from '@dnd-kit/core';
import {
	SortableContext,
	verticalListSortingStrategy,
	horizontalListSortingStrategy,
	arrayMove,
} from '@dnd-kit/sortable';

type Props<TData> = PropsWithChildren<{
	data: TData[];
	sortingStrategy: 'horizontal' | 'vertical';

	onDragEnd: (data: TData[]) => Promise<void> | void;
}>;

export const DndProvider = <TData extends { id: UniqueIdentifier }>({
	children,
	data,
	sortingStrategy,
	onDragEnd,
}: Props<TData>) => {
	const strategy =
		sortingStrategy === 'horizontal' ? horizontalListSortingStrategy : verticalListSortingStrategy;

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;
		// Avoid dropping itself
		if (!over?.id || active.id === over?.id) return;

		const oldIndex = data.findIndex((item) => item.id === active.id);
		const newIndex = data.findIndex((item) => item.id === over.id);

		const newData = arrayMove(data, oldIndex, newIndex);

		return onDragEnd(newData);
	};

	return (
		<DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
			<SortableContext items={data} strategy={strategy}>
				{children}
			</SortableContext>
		</DndContext>
	);
};
