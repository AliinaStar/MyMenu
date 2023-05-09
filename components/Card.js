import * as React from 'react';
import { Avatar, Button, Card as PaperCard, Text } from 'react-native-paper';
import { PropTypes } from "prop-types";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Card = ({ title, content, url, OnOk, OnCancel, subtitle }) => (
    <PaperCard>
        <PaperCard.Title title={title} subtitle={subtitle} left={LeftContent} />
        <PaperCard.Content>
            <Text variant="titleLarge">{title}</Text>
            <Text variant="bodyMedium">{content}</Text>
        </PaperCard.Content>
        <PaperCard.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <PaperCard.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
        </PaperCard.Actions>
    </PaperCard>
);

Card.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    content: PropTypes.string,
    url: PropTypes.string,
    OnOk: PropTypes.func,
    OnCancel: PropTypes.func,
}

export default Card;