import React from 'react';
import { Choices } from './styles';

function SidebarChoises({ title, Icon }) {
    if (Icon !== undefined) {
        return (
            <Choices>
                <Icon /> <h4>{title}</h4>
            </Choices>
        )
    } else {
        return (
            <Choices>
                <h5>{title}</h5>
            </Choices>
        )
    }

}

export default SidebarChoises;
