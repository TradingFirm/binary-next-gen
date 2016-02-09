import expect from 'expect';
import videoSelectors, { videosSelector } from '../VideoSelectors';

describe('VideoSelectors', () => {
    const emptyState = () => ({
        video: [{}, {}, {}],
    });

    describe('videosSelector', () => {
        it('should return the same result from the same state', () => {
            const state = emptyState();

            const firstList = videosSelector(state);
            const secondList = videosSelector(state);

            expect(firstList).toBe(secondList);
        });
    });

    describe('videoSelectors', () => {
        it('should return empty list when empty state', () => {
            const state = emptyState();

            const expected = { videos: [{}, {}, {}] };
            const actual = videoSelectors(state);
            expect(expected).toEqual(actual);
        });

        it('should return the same result from the same state', () => {
            const state = emptyState();

            const firstList = videoSelectors(state);
            const secondList = videoSelectors(state);

            expect(firstList).toBe(secondList);
        });
    });
});