package app.gunesmakine.application.repositories;

import app.gunesmakine.application.models.Category;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends MongoRepository<Category,ObjectId> {
    boolean existsByName(String name);
}
