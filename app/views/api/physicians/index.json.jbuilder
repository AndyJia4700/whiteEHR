@physicians.each do |physician|
    json.set! physician.id do
        json.partial! 'physician', physician: physician
    end
end