import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon127(props: CategoryInput) {
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
                d="M20.905 29.747a7.963 7.963 0 0 0 4.3 1.253c1.567 0 3.028-.45 4.262-1.228C33.587 30.139 36 33.682 36 38H14c0-4.446 2.558-8.07 6.905-8.253zM19.205 23a6 6 0 1 1 12 0 6 6 0 0 1-12 0zM42.43 11c.315 0 .571.256.571.571v6.286a.571.571 0 1 1-1.143 0V18l-2.262-.49-.181.731a.998.998 0 0 1-1.212.73l-2.773-.69a1.001 1.001 0 0 1-.729-1.212l.146-.585-2.795-.604A.57.57 0 0 1 31 15.57v-1.714a.571.571 0 0 1 1.051-.308l9.806-2.12v.142c0-.315.256-.571.572-.571zm-3.847 7.034l.175-.704-3.073-.665-.152.61a.143.143 0 0 0 .104.174l2.773.69a.14.14 0 0 0 .173-.105z"/>
        </Svg>
    );
}
