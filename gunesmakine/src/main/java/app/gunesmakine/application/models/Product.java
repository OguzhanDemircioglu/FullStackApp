package app.gunesmakine.application.models;

import app.gunesmakine.application.enums.ModelType;
import app.gunesmakine.application.enums.ProductType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Document(collection = "products")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Product {
    private ObjectId id;
    private String name;
    private LocalDateTime releaseDate;
    private String description;
    private String adress;
    private ModelType modelType;
    private ProductType productType;
    private BigDecimal price;
    private String showCasePicture;
    @DocumentReference
    List<Image> imageList;

}
