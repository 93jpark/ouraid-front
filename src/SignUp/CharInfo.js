import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid' 
import DnfClass from '../DnfClass'


function createData(id, charName, ability, guildName, charClass, charNote) {
    return { id, charName, ability, guildName, charClass, charNote };
}

const getClassName = (params) => {
    //DnfClass[params.row.mainClass]
}

const columns = [
    {
        field: 'charName',
        headerName: '캐릭터명',
        description: 'user\'s name',
    },
    {
        field: 'ability',
        headerName: '항마력',
        //type: 'number'
    },
    {
        field: 'guildName',
        headerName: '길드명'
    },
    {
        field: 'korClassName',
        headerName: '직업',
        type: "string",


    },
    {
        field: 'charNote',
        headerName: '비고'
    }

];

const CharInfo = ( { userCharacters, delUserCharacterHandler } ) => {
    
    

    return (
        <React.Fragment>
            <div style={{ height: 300, width:"100%" }}>
                <DataGrid
                    columns={columns}
                    rows={userCharacters}
                    density="compact"
                />
            </div>
        </React.Fragment>
    )
}

export default CharInfo;