package app.gunesmakine.application.repositories;

import app.gunesmakine.application.models.Stock;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockRepository extends MongoRepository<Stock, ObjectId> {
}
