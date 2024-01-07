package app.gunesmakine.application.repositories;

import app.gunesmakine.application.models.Image;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends MongoRepository<Image, ObjectId> {
}
