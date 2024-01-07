package app.gunesmakine.application.responses;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class GenericResponse {
    String hataMesaj;
    int hataKod;
    Object[] data;
}
