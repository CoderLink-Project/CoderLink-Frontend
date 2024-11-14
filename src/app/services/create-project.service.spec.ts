import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CreateProjectService } from './create-project.service';

describe('CreateProjectService', () => {
  let service: CreateProjectService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CreateProjectService]
    });
    service = TestBed.inject(CreateProjectService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a project', () => {
    const mockProject = { nombre: 'Proyecto Test' };

    service.crearProyecto(mockProject).subscribe(response => {
      expect(response).toEqual(mockProject);
    });

    const req = httpMock.expectOne('http://localhost:3000/api/projects/crear');
    expect(req.request.method).toBe('POST');
    req.flush(mockProject);
  });
});
