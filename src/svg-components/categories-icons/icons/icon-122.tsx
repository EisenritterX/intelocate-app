import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon122(props: CategoryInput) {
    return (
        <Svg
            viewBox="0 0 50 50"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <Path
                fill={getCodeWithColor(props).color}
                fillRule="evenodd"
                /* tslint:disable:max-line-length */
                d="M26.047 11.047v5.697a1.046 1.046 0 1 1-2.094 0v-5.697a1.046 1.046 0 1 1 2.094 0zM10 25c0-.578.468-1.047 1.047-1.047h5.58a1.046 1.046 0 1 1 0 2.094h-5.58A1.046 1.046 0 0 1 10 25zm15 7.326c.578 0 1.047.468 1.047 1.046v5.581a1.046 1.046 0 1 1-2.094 0v-5.58c0-.58.469-1.047 1.047-1.047zm6.07 5.281l-2.79-4.834a1.047 1.047 0 0 1 1.812-1.046l2.791 4.833a1.047 1.047 0 0 1-1.813 1.047zm-9.292-20.28a1.046 1.046 0 1 1-1.812 1.046l-2.849-4.933a1.047 1.047 0 0 1 1.813-1.047l2.848 4.934zm14.782-.21a1.046 1.046 0 1 1 1.047 1.813l-4.934 2.848a1.045 1.045 0 0 1-1.047-1.812l4.934-2.849zM40 25c0 .578-.468 1.047-1.047 1.047h-5.697a1.046 1.046 0 1 1 0-2.094h5.697c.579 0 1.047.469 1.047 1.047zm-2.917 8.023c-.178 0-.357-.045-.523-.14l-4.833-2.79a1.047 1.047 0 0 1 1.046-1.813l4.834 2.79a1.046 1.046 0 0 1-.524 1.953zM17.327 21.778l-4.934-2.848a1.046 1.046 0 1 1 1.047-1.813l4.933 2.85a1.046 1.046 0 1 1-1.046 1.811zm-4.41 11.245a1.046 1.046 0 0 1-.524-1.953l4.834-2.79a1.047 1.047 0 0 1 1.046 1.812l-4.833 2.791c-.166.095-.346.14-.523.14zM17.5 37.99a1.047 1.047 0 0 1-.383-1.43l2.79-4.833a1.047 1.047 0 0 1 1.813 1.047l-2.79 4.833a1.046 1.046 0 0 1-1.43.383zm11.104-19.233c-.5-.29-.672-.93-.382-1.43l2.848-4.934a1.046 1.046 0 1 1 1.813 1.047l-2.85 4.933a1.045 1.045 0 0 1-1.429.384z"/>
        </Svg>
    );
}
