const configAbility = {
  "fileName": "4015011_Monster_W4_DawnsEye_01_MainStoryOpeningPhase01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Character ID",
        "ID": 1409,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": "Hyacine"
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}