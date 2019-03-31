import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule,
     MatToolbarModule, MatDialogModule,
     MatFormFieldModule, MatCardModule, MatMenuModule, MatDivider, MatDividerModule, MatListModule, MatGridListModule, MatExpansionModule } from '@angular/material';
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
        MatMenuModule,
        MatListModule,
        MatDividerModule,
        MatGridListModule,
        MatExpansionModule
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
        MatMenuModule,
        MatListModule,
        MatDividerModule,
        MatGridListModule,
        MatExpansionModule
    ]
})
export class MaterialModule {

}