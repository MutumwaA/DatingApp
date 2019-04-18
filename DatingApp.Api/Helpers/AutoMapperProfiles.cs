using System.Linq;
using AutoMapper;
using DatingApp.Api.Dtos;
using DatingApp.Api.Models;

namespace DatingApp.Api.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
           CreateMap<User, UserForListDto>()
           .ForMember(dest => dest.PhotoUrl, opt => {
               opt.MapFrom(scr => scr.Photos.FirstOrDefault(p => p.IsMain).Url);
           })
           
           .ForMember(dest => dest.Age, opt => {
               opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
           })
           
           ;
           CreateMap<User, UserForDetailedDto>()
          .ForMember(dest => dest.PhotoUrl, opt => {
               opt.MapFrom(scr => scr.Photos.FirstOrDefault(p => p.IsMain).Url);
           })
            .ForMember(dest => dest.Age, opt => {
               opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
           });
           CreateMap<Photo, PhotosForDetailedDto>();   
        }
    }
}