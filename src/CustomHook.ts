import { useEffect, useRef, useCallback } from 'react'

type Callback = () => any

const useComponentDidMount = (callback: Callback): void => {
    const ref = useRef(callback);
    useEffect(ref.current, []);
};

const useComponentDidUnmount = (callback: Callback): void => {
    const ref = useRef(callback);
    useEffect(() => ref.current, []);
};

const usePreviousProp = (value: any): any => {
    const ref = useRef(); // This ref is an object which holds a prop called current which is mutable.

    useEffect(() => {
        ref.current = value;
        // stores the current value in ref
    }, [value]); // only re-run if the parameter value changes

    // return previous value (happens before update in useEffect above)
    return ref.current;
}
export { useComponentDidMount, useComponentDidUnmount, usePreviousProp };