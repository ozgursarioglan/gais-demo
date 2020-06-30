import React, {Component} from 'react';
import { Table, Label, Checkbox } from 'semantic-ui-react'
import "carbon-components/scss/globals/scss/styles.scss";
import Moment from 'react-moment';

const rows = [

    {
        "id": "402987",
        "urlhaus_reference": "https://urlhaus.abuse.ch/url/402987/",
        "url": "http://199.83.203.219:53060/Mozi.m",
        "url_status": "offline",
        "host": "199.83.203.219",
        "date_added": "2020-06-28 18:03:53 UTC",
        "threat": "malware_download",
        "blacklists": {
            "spamhaus_dbl": "not listed",
            "surbl": "not listed"
        },
        "reporter": "Gandylyan1",
        "larted": false,
        "tags": [
            "Mozi"
        ]
    },
    {
        "id": "402986",
        "urlhaus_reference": "https://urlhaus.abuse.ch/url/402986/",
        "url": "http://162.212.115.139:33544/Mozi.m",
        "url_status": "online",
        "host": "162.212.115.139",
        "date_added": "2020-06-28 18:03:51 UTC",
        "threat": "malware_download",
        "blacklists": {
            "spamhaus_dbl": "not listed",
            "surbl": "not listed"
        },
        "reporter": "Gandylyan1",
        "larted": true,
        "tags": [
            "Mozi"
        ]
    },
    {
        "id": "402985",
        "urlhaus_reference": "https://urlhaus.abuse.ch/url/402985/",
        "url": "http://172.39.34.29:34344/Mozi.m",
        "url_status": "offline",
        "host": "172.39.34.29",
        "date_added": "2020-06-28 18:03:47 UTC",
        "threat": "malware_download",
        "blacklists": {
            "spamhaus_dbl": "not listed",
            "surbl": "not listed"
        },
        "reporter": "Gandylyan1",
        "larted": false,
        "tags": [
            "Mozi"
        ]
    },
    {
        "id": "402984",
        "urlhaus_reference": "https://urlhaus.abuse.ch/url/402984/",
        "url": "http://110.18.194.236:53840/Mozi.m",
        "url_status": "online",
        "host": "110.18.194.236",
        "date_added": "2020-06-28 18:03:16 UTC",
        "threat": "malware_download",
        "blacklists": {
            "spamhaus_dbl": "not listed",
            "surbl": "not listed"
        },
        "reporter": "Gandylyan1",
        "larted": true,
        "tags": [
            "Mozi"
        ]
    },
    {
        "id": "402983",
        "urlhaus_reference": "https://urlhaus.abuse.ch/url/402983/",
        "url": "http://222.74.186.180:50269/Mozi.m",
        "url_status": "online",
        "host": "222.74.186.180",
        "date_added": "2020-06-28 18:03:13 UTC",
        "threat": "malware_download",
        "blacklists": {
            "spamhaus_dbl": "not listed",
            "surbl": "not listed"
        },
        "reporter": "Gandylyan1",
        "larted": true,
        "tags": [
            "Mozi"
        ]
    },
    {
        "id": "402982",
        "urlhaus_reference": "https://urlhaus.abuse.ch/url/402982/",
        "url": "http://116.114.95.192:54196/Mozi.m",
        "url_status": "offline",
        "host": "116.114.95.192",
        "date_added": "2020-06-28 18:03:08 UTC",
        "threat": "malware_download",
        "blacklists": {
            "spamhaus_dbl": "not listed",
            "surbl": "not listed"
        },
        "reporter": "Gandylyan1",
        "larted": false,
        "tags": [
            "Mozi"
        ]
    },
    {
        "id": "402981",
        "urlhaus_reference": "https://urlhaus.abuse.ch/url/402981/",
        "url": "http://111.42.66.178:52616/Mozi.m",
        "url_status": "online",
        "host": "111.42.66.178",
        "date_added": "2020-06-28 18:03:06 UTC",
        "threat": "malware_download",
        "blacklists": {
            "spamhaus_dbl": "not listed",
            "surbl": "not listed"
        },
        "reporter": "Gandylyan1",
        "larted": true,
        "tags": [
            "Mozi"
        ]
    },
    {
        "id": "402980",
        "urlhaus_reference": "https://urlhaus.abuse.ch/url/402980/",
        "url": "http://176.113.161.76:42705/Mozi.m",
        "url_status": "online",
        "host": "176.113.161.76",
        "date_added": "2020-06-28 18:03:03 UTC",
        "threat": "malware_download",
        "blacklists": {
            "spamhaus_dbl": "not listed",
            "surbl": "not listed"
        },
        "reporter": "Gandylyan1",
        "larted": true,
        "tags": [
            "Mozi"
        ]
    },
    {
        "id": "402979",
        "urlhaus_reference": "https://urlhaus.abuse.ch/url/402979/",
        "url": "http://170.130.55.135/api.php",
        "url_status": "offline",
        "host": "170.130.55.135",
        "date_added": "2020-06-28 17:53:03 UTC",
        "threat": "malware_download",
        "blacklists": {
            "spamhaus_dbl": "not listed",
            "surbl": "not listed"
        },
        "reporter": "abuse_ch",
        "larted": false,
        "tags": [
            "exe",
            "Trickbot"
        ]
    },
    {
        "id": "402978",
        "urlhaus_reference": "https://urlhaus.abuse.ch/url/402978/",
        "url": "http://162.232.82.166:30312/.i",
        "url_status": "online",
        "host": "162.232.82.166",
        "date_added": "2020-06-28 17:33:06 UTC",
        "threat": "malware_download",
        "blacklists": {
            "spamhaus_dbl": "not listed",
            "surbl": "not listed"
        },
        "reporter": "tolisec",
        "larted": true,
        "tags": [
            "elf"
        ]
    }

];

const headers = [
    {
        // `key` is the name of the field on the row object itself for the header
        key: 'id',
        // `header` will be the name you want rendered in the Table Header
        header: 'Id',
    },
    {
        key: 'url',
        header: 'Url',
    },
    {
        key: 'url_status',
        header: 'Url Status',
    },
    {
        key: 'host',
        header: 'Host',
    },
    {
        key: 'date_added',
        header: 'Date Added',
    },
    {
        key: 'threat',
        header: 'Threat',
    },
    {
        key: 'reporter',
        header: 'Reporter',
    },
    {
        key: 'larted',
        header: 'Larted',
    },
    {
        key: 'tags',
        header: 'Tags',
    },
];

function statusColor(status) {
    if (status === 'offline')
        return <Label color='red' horizontal>Offline</Label>;

    else
        return <Label color='green' horizontal>Online</Label>;
}



class UrlPage extends Component {
    render() {


        return (
            <div>
                <Table celled striped>
                    <Table.Header>
                        <Table.Row>
                            {headers.map(header => (
                                <Table.HeaderCell>{header.header}</Table.HeaderCell>
                            ))}

                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {rows.map(row => (
                            <Table.Row>
                                <Table.Cell>{row.id}</Table.Cell>
                                <Table.Cell>{row.url}</Table.Cell>
                                <Table.Cell>{statusColor(row.url_status)}</Table.Cell>
                                <Table.Cell>{row.host}</Table.Cell>
                                <Table.Cell><Moment format="YYYY/MM/DD">{row.date_added}</Moment></Table.Cell>
                                <Table.Cell>{row.threat}</Table.Cell>
                                <Table.Cell>{row.reporter}</Table.Cell>
                                <Table.Cell><Checkbox checked={row.larted} readOnly /></Table.Cell>
                                <Table.Cell>{row.tags}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

export default UrlPage;