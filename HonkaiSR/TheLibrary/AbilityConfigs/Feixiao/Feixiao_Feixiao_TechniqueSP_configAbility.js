const configAbility = {
  "fileName": "Feixiao_Feixiao_TechniqueSP",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "StageAbility_Maze_Feixiao_Modifier_GainSP"
    }
  ],
  "references": []
}