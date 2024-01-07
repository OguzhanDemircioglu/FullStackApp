package app.gunesmakine.application.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "images")
public class Image {
    @Id
    private ObjectId imageId;
    private String imagePath;
    private LocalDateTime cDate;
    private LocalDateTime uDate;

}
