import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule,
     MatToolbarModule, MatDialogModule, 
     MatFormFieldModule, MatCardModule, MatMenuModule } from '@angular/material';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [
        CommonModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatToolbarModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatMenuModule
    ],
    exports: [
        CommonModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatToolbarModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatMenuModule
    ]
})
export class MaterialModule {

}