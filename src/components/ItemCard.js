import React from 'react';
import { Card, CardHeaderTitle, CardContent } from 'bloomer';

function ItemCard({ item }) {
  return (
    <div className="column is-one-quarter">
      <Card>
        <CardHeaderTitle>
          {item.name}
        </CardHeaderTitle>
        <CardContent>
          <p className="subtitle">{item.rarity}</p>
          <p>{item.type}</p><br />
          {item.requires_attunement && <span className="tag is-info">{item.requires_attunement}</span>}
        </CardContent>
        <footer className="card-footer">
          <a href="http://www.google.com" className="card-footer-item">Add to bag</a>
        </footer>
      </Card>
    </div>
  );
};

export default ItemCard;